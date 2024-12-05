import SidebarLink from "@/components/Docs/SidebarLink";
import { Metadata } from "next";

// 这部分代码定义了当前页面的元数据，具体包括：
// title：网页的标题，显示在浏览器标签页上。
// description：网页的描述，通常会用于搜索引擎的搜索结果摘要部分。
// 通过这种方式，Next.js 可以更好地优化页面的 SEO 和展示效果。

export const metadata: Metadata = {
  title: "Docs Page - Solid SaaS Boilerplate",
  description: "This is Docs page for Solid Pro",
  // other metadata
};

// 这是一个 React 组件，页面的主体部分，包含了 HTML 和 JSX 代码。
export default function DocsPage() {
  return (
    <>
      <section className="pb-16 pt-24 md:pb-20 md:pt-28 lg:pb-24 lg:pt-32">
        {/* 容器居中, container 使得容器居中 */}
        <div className="container mx-auto">
          <div className="-mx-4 flex flex-wrap">
            {/* 通过 w-full 和 lg:w-1/4，在不同屏幕尺寸下，侧边栏的宽度会变化。 */}
            <div className="w-full px-4 lg:w-1/4">
              <div className="sticky top-[74px] rounded-lg border border-white p-4 shadow-solid-4  transition-all  dark:border-strokedark dark:bg-blacksection">
                <ul className="space-y-2">
                  <SidebarLink />
                </ul>
              </div>
            </div>
            {/* 主体部分 */}

            {/* w-full 类设置元素宽度为父容器的100% px-4 左右内边距1rem (16px) x 表示水平方向
            lg:w-3/4：这个类是针对大屏幕（lg 是 Tailwind CSS 中的一个屏幕断点，表示大于或等于 1024px 的屏幕）。当屏幕宽度大于或等于 1024px 时，元素的宽度将变为父容器的 3/4，即宽度为父容器的 75%。 */}

            <div className="w-full px-4 lg:w-3/4">
            {/* shadow-three 自定义阴影效果类 dark-bg-gray-dark 暗黑模式的样式 rounded 设置边角为小的圆角， bg-white 背景色为白 
            px-8 设置左右内边距为 2rem（32px） py-11 设置上下内边距为 2.75rem（44px）。y 代表上下方向的内边距。 
            在小屏幕（sm 是 Tailwind 中的一个屏幕断点，表示大于或等于 640px 的屏幕）上，内边距会设置为 55px。
            lg:mb-5 在大屏幕（lg 是 Tailwind 中大屏的断点，表示大于或等于 1024px）上，设置下外边距（mb）为 1.25rem（20px）。*/}
              <div className="blog-details blog-details-docs shadow-three dark:bg-gray-dark rounded-sm bg-white px-8 py-11 sm:p-[55px] lg:mb-5 lg:px-8 xl:p-[55px]">
                <h1>Welcome to Startup Documentation</h1>

                <p className="text-body-color dark:text-body-color-dark text-base">
                  This document serves as a simple template to showcase a sample
                  layout and format. It is solely created for demonstration
                  purposes and is not intended for any official use.
                </p>
                <p className="text-body-color dark:text-body-color-dark text-base">
                  Please visit:{" "}
                  <b>
                    <a href="https://nextjstemplates.com/docs">
                      nextjstemplates.com/docs
                    </a>
                  </b>{" "}
                  to check out the real docs, setup guide and even video
                  instructions
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
