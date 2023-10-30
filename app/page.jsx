import Feed from "@components/feed"


const Home = () => {
    return (
        <section className="w-full_flex-center flex-col">
            <h1 className="head_text text-center">
                Discover and share
                <br className="max-md:hidden" />
                <span className="orange_gradient text-center">AI-Powered Prompt</span>
            </h1>
            <p className="desc text-center">promptopia is an opensource Ai prompyion tool for the modern worlfd to discover create and share prompts</p>

            <Feed />
        </section>
    )
}

export default Home