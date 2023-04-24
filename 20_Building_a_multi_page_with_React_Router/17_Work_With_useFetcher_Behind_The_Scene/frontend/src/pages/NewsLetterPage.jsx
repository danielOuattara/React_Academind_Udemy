import { NewsLetterSignUp } from "../components/";
import { PageContent } from "../components";

export default function NewsLetterPage() {
  return (
    <PageContent title="Join our awesome newsletter!">
      <NewsLetterSignUp />
    </PageContent>
  );
}

export async function newsLetterAction({ request }) {
  const data = await request.formData();
  const email = data.get("email");

  // send to backend newsletter server ...
  console.log(email);
  return { message: "Sign up successful!" };
}
