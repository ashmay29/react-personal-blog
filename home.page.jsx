import Animationwrapper from "../common/page-animation"
import InPageNavigation from "../components/inpage-navigation.component"
import { blogsData } from "../data/blog_cards"
import Loader from "../components/loader.component"

const HomePage = () => {
    return (
        <Animationwrapper>
            <section className="h-cover flex justify-center gap-10">
                <div className="w-full">
                    <InPageNavigation routes={["home", "trending blogs"]} defaulthidden={["trending blogs"]}>
                        <>
                            {
                                blogsData == null ? <Loader /> :
                                    blogsData.map((blog, index) => {
                                        return (
                                            <div>
                                                {blogsData.map(blog => (
                                                    <div key={blog.blog_id} className="blog-item">
                                                        <img src={blog.banner} alt={blog.title} />
                                                        <h2>{blog.title}</h2>
                                                        <p>{blog.description}</p>
                                                        <p>Author: {blog.author}</p>
                                                        <br /> 
                                                    </div>
                                                ))}
                                            </div>
                                        )
                                    })
                            }
                        </>

                        <h1>trending blogs here</h1>
                    </InPageNavigation>

                </div>
                <div>

                </div>

            </section>
        </Animationwrapper>
    )
}
export default HomePage