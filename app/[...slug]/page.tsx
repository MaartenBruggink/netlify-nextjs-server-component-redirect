import { notFound, redirect } from "next/navigation";

const EXPECTED_SLUG_ARR = ["test", "123"];
const EXPECTED_SLUG = EXPECTED_SLUG_ARR.join("/");

const Page = async (context: PageProps<"/[...slug]">) => {
	const params = await context.params;

	if (params.slug.length > 2) {
		return notFound();
	}

	if (params.slug.join("/") !== EXPECTED_SLUG) {
		return redirect(`/${EXPECTED_SLUG}`);
	}

	return <h1>Correct slug</h1>;
};

export const generateStaticParams = async () => {
	return [{ slug: EXPECTED_SLUG_ARR }];
};

export default Page;
