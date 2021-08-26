<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class NewsController extends Controller
{
    
    const NEWS_COUNT = 5; // Ограничение по кол-ву новостей за 1 запрос
    const DATE_FORMAT = "%d.%m.%Y"; // Формат даты публикации новости
    const TIME_FORMAT = "%H:%i"; // Формат времени публикации новости

    public static $news = [];

    // Извлечение новостей из БД
    public static function get(Request $request) {
        // Читаем параметры GET-запроса
        $req = $request->input('req'); // Текст для поиска
        $page = $request->input('page'); // Страница
        
        // Выполняем вычисления
        $skip = self::NEWS_COUNT * $page; // Количество записей, которое необходимо пропустить

        // Формируем запрос к БД
        /*
        SELECT DATE_FORMAT(post_date, '$dateF') AS `date`, post_text AS text, post_img AS img_url, DATE_FORMAT(post_date, '$timeF') AS `time`
        FROM news
        WHERE `text` like %$req%
        ORDER BY post_date DESC
        OFFSET $skip
        LIMIT $self::NEWS_COUNT
        */

        $dateF = self::DATE_FORMAT;
        $timeF = self::TIME_FORMAT;

        $result = DB::table('news')
        ->select(DB::raw("DATE_FORMAT(post_date, '$dateF') AS date"), "post_text AS text", "post_img AS img_url", DB::raw("DATE_FORMAT(post_date, '$timeF') AS time"))
        ->where("post_text","like","%$req%")
        ->orderBy("post_date", "DESC")
        ->skip($skip)
        ->take(self::NEWS_COUNT)
        ->get();

        // Сохраняем список новостей в свойстве класса
        self::$news = $result;
        
        return $result;
    }

    // Группировка новостей по свойству $prop 
    public static function groupBy(String $prop) {
        return self::$news
        ->groupBy(function($item) use ($prop) {
            return $item->$prop;
        });
    }


}
