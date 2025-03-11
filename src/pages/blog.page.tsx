import { blogPosts } from "@/blog-posts";
import { Button, ButtonType } from "@/general/components/button.component";
import { CircleImage } from "@/general/components/images/circle-image.component";
import { MarkdownLoading } from "@/general/components/markdown-loading.component";
import { Page } from "@/general/components/page.component";
import { ImageBorderThickness } from "@/general/interfaces/image-component.interface";
import { useTranslation } from "react-i18next";
import { useParams } from "react-router-dom";

export function BlogPage() {
  const { t } = useTranslation();
  const slug = useParams().slug!;
  const blogPost = blogPosts.find((post) => post.slug === slug);

  return (
    <Page>
      {blogPost && (
        <CircleImage
          image={blogPost?.image}
          border={ImageBorderThickness.xs}
          borderColor="border-0"
          className="mx-auto xl:w-[400px] 2xl:w-[500px] md:relative md:w-[300px] lg:w-[350px] max-w-[300px]"
        />
      )}
      <div className="flex justify-center mt-8">
        <div className="w-full lg:w-2/3 xl:w-1/2 2xl:w-1/3">
          <MarkdownLoading fileName={`blog/${slug}`} />
          <div className="flex">
            <Button className="mt-8" type={ButtonType.SECONDARY} link="/blog">
              {t("blog.back-to-blog")}
            </Button>
          </div>
        </div>
      </div>
    </Page>
  );
}
