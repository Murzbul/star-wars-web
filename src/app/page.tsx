import "../../src/app/old/Home.css";
import "./App.css";

import Welcome from "@/features/Welcome";
import Layout from "@/features/Layout";

export default function Page()
{
    return (
        <Layout className="app">
            <Welcome />
        </Layout>
    )
}
