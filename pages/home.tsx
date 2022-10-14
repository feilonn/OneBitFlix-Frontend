import Head from "next/head";
import Footer from "../src/components/common/footer";
import FavoriteCategory from "../src/components/homeAuth/favoriteCategory";
import FeaturedCategory from "../src/components/homeAuth/featuredCategory";
import FeaturedSection from "../src/components/homeAuth/featuredSection";
import ListCategory from "../src/components/homeAuth/listCategories";
import NewestCategory from "../src/components/homeAuth/newestCategory";

const HomeAuth = () => {
    return (
        <>
        <Head>
            <title>Onebitflix - Home</title>
            <link rel="shortcut icon" href="/favicon.svg" type="image/x-icon" />
        </Head>
        <main>
            <FeaturedSection />
            <NewestCategory />
            <FavoriteCategory />
            <FeaturedCategory />
            <ListCategory />
            <Footer />
        </main>
        </>
    );
};

export default HomeAuth;