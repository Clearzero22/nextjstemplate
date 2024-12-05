import { Metadata } from "next";
import Image from "next/image";
// 导入显示图片组件
export const metadata: Metadata = {
  title: "Error Page - Solid SaaS Boilerplate",
  description: "This is Error page for Solid Pro",
  // other metadata
};

const ErroPage = () => {
  return (
    // overflow-hidden 将溢出元素隐藏
    /*
    pb-25：设置下内边距（pb）为 25px。p 代表内边距，b 代表下边距。
    pt-45：设置上内边距（pt）为 45px。t 代表上边距。
    lg:pb-32.5：在大屏幕（lg，大于或等于 1024px）上，设置下内边距为 32.5px。
    lg:pt-50：在大屏幕（lg）上，设置上内边距为 50px。
    xl:pb-37.5：在超大屏幕（xl，大于或等于 1280px）上，设置下内边距为 37.5px。
    xl:pt-55：在超大屏幕（xl）上，设置上内边距为 55px。

    text-center 文本居中对齐
    mx-auto 和上面div类一样居中对齐
    mb-7.5：设置图片的下外边距为 7.5px。mb 是下外边距（margin-bottom）的简写。
    font-semibold：设置字体为半粗体（semi-bold）。使标题更加突出。
    text-black：设置字体颜色为黑色。
    dark:text-white：在暗黑模式下，字体颜色变为白色。dark: 是 Tailwind 的暗黑模式前缀，表示当用户处于暗黑模式时应用的样式。  
    */
    <section className="overflow-hidden pb-25 pt-45 lg:pb-32.5 lg:pt-50 xl:pb-37.5 xl:pt-55">
      <div className="animate_top mx-auto max-w-[518px] text-center">
        <Image
          src="/images/shape/404.svg"
          alt="404"
          className="mx-auto mb-7.5"
          width={400}
          height={400}
        />

        <h2 className="mb-5 text-2xl font-semibold text-black dark:text-white md:text-4xl">
          This Page Does Not Exist
        </h2>
        <p className="mb-7.5">
          The page you were looking for appears to have been moved, deleted or
          does not exist.
        </p>

        {/* inline-flex：设置该元素为行内元素，并且使用 flex 布局。这使得按钮中的内容（例如文字和图标）能够在一行内排列。
        items-center：在 flex 布局下，垂直方向上将子元素居中对齐。
        gap-2.5：设置子元素（文字和图标）之间的间距为 2.5px。
        rounded-full：设置元素的边角为完全圆形。这会使得按钮的角非常圆滑，呈现出一个圆形或椭圆形的按钮。
        bg-black：设置按钮背景颜色为黑色。 */}
        <a
          href="/"
          className="inline-flex items-center gap-2.5 rounded-full bg-black px-6 py-3 font-medium text-white duration-300 ease-in-out hover:bg-blackho dark:bg-btndark dark:hover:bg-blackho"
        >
          Return to Home
          <svg
            className="fill-white"
            width="14"
            height="14"
            viewBox="0 0 14 14"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M10.4767 6.16664L6.00668 1.69664L7.18501 0.518311L13.6667 6.99998L7.18501 13.4816L6.00668 12.3033L10.4767 7.83331H0.333344V6.16664H10.4767Z"
              fill=""
            />
          </svg>
        </a>
      </div>
    </section>
  );
};

export default ErroPage;
