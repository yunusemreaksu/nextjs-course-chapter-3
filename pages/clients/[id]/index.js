import { useRouter } from "next/router";

export default function ClientProjectsPage() {
  const router = useRouter();
  console.log(router.query);
  function loadProjectHandler() {
    // router.push("/clients/emre/project-a")
    // or:
    router.push({
      pathname: "/clients/[id]/[clientprojectid]",
      query: { id: "emre", clientprojectid: "project-a" },
    });
  }

  return (
    <div>
      <h1>The Projects of a Given Client</h1>
      <button onClick={loadProjectHandler}>Load Project A</button>
    </div>
  );
}
