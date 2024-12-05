// 设置网页标题 这个标题会显示在浏览器的标签页上，同时也对 SEO 有影响。

/**
 * <meta content="width=device-width, initial-scale=1" name="viewport" />

    这是视口（Viewport）设置标签，确保页面在不同设备上有良好的显示效果，特别是移动端设备。
    content="width=device-width"：设置视口宽度为设备的实际宽度。
    initial-scale=1：初始缩放比例为 1。
 * @returns 
 */

/**
 * <meta name="description" content="Built with Next.js and TypeScript" />

设置网页的描述，通常会被搜索引擎使用，并显示在搜索结果中。
name="description"：定义这是一个描述性元数据。
content="Built with Next.js and TypeScript"：实际的描述内容，告诉用户和搜索引擎页面是用 Next.js 和 TypeScript 构建的。
 * @returns 
 */

export default function Head() {
  return (
    <>
      <title> Solid | Next.js Template for Startup and SaaS</title>
      <meta content="width=device-width, initial-scale=1" name="viewport" />
      <meta name="description" content="Built with Next.js and TypeScript" />
      <link rel="icon" href="/images/favicon.ico" />
    </>
  );
}
