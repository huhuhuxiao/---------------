const menu = {
    list() {
        return [{"backMenu":[{"child":[{"appFrontIcon":"cuIcon-flashlightopen","buttons":["新增","查看","修改","删除"],"menu":"用户","menuJump":"列表","tableName":"yonghu"}],"menu":"用户管理"},{"child":[{"appFrontIcon":"cuIcon-cardboard","buttons":["新增","查看","修改","删除","查看评论"],"menu":"在线电影","menuJump":"列表","tableName":"zaixiandianying"}],"menu":"在线电影管理"},{"child":[{"appFrontIcon":"cuIcon-goodsnew","buttons":["新增","查看","修改","删除"],"menu":"电影分类","menuJump":"列表","tableName":"dianyingfenlei"}],"menu":"电影分类管理"},{"child":[{"appFrontIcon":"cuIcon-medal","buttons":["查看","删除"],"menu":"电影评分","menuJump":"列表","tableName":"dianyingpingfen"}],"menu":"电影评分管理"},{"child":[{"appFrontIcon":"cuIcon-cardboard","buttons":["新增","查看","修改","删除","爬取"],"menu":"电影信息","tableName":"pymovie"}],"menu":"爬虫管理"},{"child":[{"appFrontIcon":"cuIcon-present","buttons":["查看","修改","删除"],"menu":"轮播图管理","tableName":"config"}],"menu":"系统管理"}],"frontMenu":[{"child":[{"appFrontIcon":"cuIcon-list","buttons":["查看","评分"],"menu":"在线电影列表","menuJump":"列表","tableName":"zaixiandianying"}],"menu":"在线电影模块"},{"child":[{"appFrontIcon":"cuIcon-copy","buttons":["查看"],"menu":"电影信息列表","tableName":"pymovie"}],"menu":"电影信息模块"}],"hasBackLogin":"是","hasBackRegister":"否","hasFrontLogin":"否","hasFrontRegister":"否","roleName":"管理员","tableName":"users"},{"backMenu":[{"child":[{"appFrontIcon":"cuIcon-medal","buttons":["查看","删除"],"menu":"电影评分","menuJump":"列表","tableName":"dianyingpingfen"}],"menu":"电影评分管理"}],"frontMenu":[{"child":[{"appFrontIcon":"cuIcon-list","buttons":["查看","评分"],"menu":"在线电影列表","menuJump":"列表","tableName":"zaixiandianying"}],"menu":"在线电影模块"},{"child":[{"appFrontIcon":"cuIcon-copy","buttons":["查看"],"menu":"电影信息列表","tableName":"pymovie"}],"menu":"电影信息模块"}],"hasBackLogin":"是","hasBackRegister":"否","hasFrontLogin":"是","hasFrontRegister":"是","roleName":"用户","tableName":"yonghu"}]
    }
}
export default menu;
