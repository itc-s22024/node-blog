import { getPostBySlug } from "lib/api"
import Container from "@/components/container"
import PostHeader from "@/components/post-header"
import PostBody from "@/components/post-body"
import { TwoColumn, TwoColumnMain, TwoColumnSidebar } from "@/components/two-column"
import Image from "next/image"

export default function Schedule({
    title,
    publish,
    content,
    eyecatch,
    categories,
}) {
    return (
        <Container>
            <article>
                <PostHeader title={title} subtitle="Blog Article" publish={publish} />
                <figure>
                    <Image
                        src={eyecatch.url}
                        alt=""
                        width={eyecatch.width}
                        height={eyecatch.height}
                        style={{
                            width: '100%',
                            height: 'auto',
                        }}
                        sizes="(min-width: 1152px) 1152px, 100vw"
                        priority
                    />
                </figure>
                <TwoColumn>
                    <TwoColumnMain>
                        <PostBody>
                            <div dangerouslySetInnerHTML={{ __html: content }} />
                        </PostBody>
                    </TwoColumnMain>
                    <TwoColumnSidebar />
                </TwoColumn>
            </article>
        </Container>
    )
}

export async function getStaticProps() {
    const slug = 'schedule'

    const post = await getPostBySlug(slug)

    return {
        props: {
            title: post.title,
            publish: post.publishDate,
            content: post.content,
            eyecatch: post.eyecatch,
            categories: post.categories,
        },
}
}