import req from '../base'

//电影列表
export var movie_list = params => req.get('/searchMovieList',params)

//影院列表
export var celima_list = params => req.get('/celimaList',params)