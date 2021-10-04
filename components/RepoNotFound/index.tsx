import { useRouter } from "next/dist/client/router";

export default function RepoNotFound() {
  const { username, repository } = useRouter().query;

  if (!username && !repository) {
    return (
      <h2>
        Search for a repo! You need to enter an username and a repo name, if the
        repo is found, its issues will appear here!
      </h2>
    );
  }

  if (!username) {
    return (
      <h2>
        You need to enter an username, if the repo is found, its issues will
        appear here!
      </h2>
    );
  }

  if (!repository) {
    return (
      <h2>
        You need to enter a repo name, if the repo is found, its issues will
        appear here!
      </h2>
    );
  }

  return (
    <h2>
      The repo{" "}
      <strong>
        {username}/{repository}
      </strong>{" "}
      was not found!
    </h2>
  );
}
