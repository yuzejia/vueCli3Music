
import { Component, Prop, Vue } from 'vue-property-decorator';
@Component
export default class Message extends Vue {

   // 加载成功 loading 封装
   public static loadingShow(_this: any, m?: string) {
        _this.$Loading.start(); // 调用进度条
        let text: string | undefined = m || '正在努力加载...';
         _this.$Message.loading({
            content: text,
            duration: 0
        });
    }

    // 加载成功 关闭loading 封装
   public static loadingHide(_this: any) {
        _this.$Message.destroy(); // 全局清楚 提示
        _this.$Loading.finish();  // 关闭进度条
    }

     // 加载成功 关闭loading 封装
   public static loadingError(_this: any) {
        _this.$Message.destroy() // 全局清楚 提示
        _this.$Loading.error();  // 进度条错误提示关闭
    }
}