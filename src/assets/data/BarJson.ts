// 底部导航菜单配置

import PathData from '../data/path_data'

export default class BarJson {
    private static _tabLIst: Array<Object> = [
        {
            name: "首页",
            url: PathData.HOME,
        },
        {
            name: "官网",
            url: PathData.WEBSITE,
        },
        {
            name: "新闻",
            url: PathData.HOME,
        },
        {
            name: "我的",
            url: PathData.MEINDEX,
        },

      
    ];
    public static get tabLIst() {
        return BarJson._tabLIst;
    }
}
