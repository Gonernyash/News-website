<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class NewsController extends Controller
{
    public function getNews(Request $request) {
        $req = $request->input('req');
        $page = $request->input('page');
        // SELECT DATE(post_date) AS `date`, post_text AS text, post_img AS img_url, TIME(post_date) AS `time`
        // FROM news
        // ORDER BY post_date DESC
        $result = DB::table('news')
        ->select(DB::raw("DATE(post_date) AS date"), "post_text AS text", "post_img AS img_url", DB::raw("TIME(post_date) AS time"))
        ->orderBy("post_date", "DESC")
        ->get();
        $resultData = [];
        $newsList = [];
        for ($i = 0; $i < count($result); $i++) {

        }
        return $result;
    }
}
