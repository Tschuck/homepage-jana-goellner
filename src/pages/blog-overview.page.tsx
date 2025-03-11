import { blogPosts } from "@/blog-posts";
import { DoorImage } from "@/general/components/images/door-image.component";
import { Page } from "@/general/components/page.component";
import { ImageBorderThickness } from "@/general/interfaces/image-component.interface";
import { Link } from "react-router-dom";

export function BlogOverviewPage() {
  return (
    <Page className="w-full pb-16">
      <div className="flex-col items-center justify-center hidden gap-8 pb-16 lg:grid lg:grid-cols-3 lg:mt-16">
        {blogPosts.map((post) => (
          <Link
            key={post.slug}
            to={`/blog/post/${post.slug}`}
            className="border-4 rounded-tl-full rounded-tr-full border-primary"
          >
            <DoorImage image={post.image} border={ImageBorderThickness.none} />
            <div className="p-4">
              <p className="text-semibold">{post.title}</p>
              <p className="text-xs">{post.summary}</p>
              <p className="text-xs italic text-gray-600">
                {new Date(post.date).toLocaleDateString()}
              </p>
            </div>
          </Link>
        ))}
      </div>

      <div className="flex flex-col gap-8 lg:hidden">
        {blogPosts.map((post) => (
          <Link
            className="flex border-2 rounded-md border-primary hover:bg-gray-50"
            key={post.slug}
            to={`/blog/post/${post.slug}`}
          >
            <img
              src={post.image}
              className="w-[100px] bg-center bg-cover aspect-square object-cover"
            />
            <div className="flex flex-col justify-start py-4 ml-4">
              <p className="text-semibold">{post.title}</p>
              <p className="text-xs">{post.summary}</p>
              <p className="text-xs italic text-gray-600">
                {new Date(post.date).toLocaleDateString()}
              </p>
            </div>
          </Link>
        ))}
      </div>
    </Page>
  );
}
