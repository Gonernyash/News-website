<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class NewsController extends Controller
{
    // Ограничение по кол-ву новостей за 1 запрос
    const NEWS_COUNT = 5; 

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
        SELECT DATE(post_date) AS `date`, post_text AS text, post_img AS img_url, TIME(post_date) AS `time`
        FROM news
        WHERE `text` like %$req%
        ORDER BY post_date DESC
        OFFSET $skip
        LIMIT $self::NEWS_COUNT
        */
        $result = DB::table('news')
        ->select(DB::raw("DATE(post_date) AS date"), "post_text AS text", "post_img AS img_url", DB::raw("TIME(post_date) AS time"))
        ->where("post_text","like","%$req%")
        ->orderBy("post_date", "DESC")
        ->skip($skip)
        ->take(self::NEWS_COUNT)
        ->get();

        // Сохраняем список в свойстве класса
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
