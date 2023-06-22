import {type NextPage} from "next";
import Head from "next/head";

import AdminLayout from "~/components/layout.admin";

const ProjectsPage: NextPage = () => {
  return (
    <>
      <Head>
        <title>Dashboard</title>
        <meta name="description" content="Dashboard page" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <AdminLayout>
        <div className="flex h-full w-full items-center justify-center">
          <h3>Projects page admin</h3>
        </div>
      </AdminLayout>
    </>
  );
};

export default ProjectsPage;