import Link from "next/link";

import {api} from "~/utils/api";
import type {RouterOutputs} from "~/utils/api";

import {Building, MapPin} from "lucide-react";

import {Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle} from "~/components/ui/card";
import {Badge} from "~/components/ui/badge";
import {Button} from "~/components/ui/button";

const ProjectsContainer: React.FC = () => {
  const {data: projects} = api.project.getAllByProfileId.useQuery();

  if (!projects) return null;

  return (
    <Card className="border-none">
      <CardHeader className="mb-2 flex flex-row items-baseline justify-between">
        <CardTitle>Projects</CardTitle>
        <CardDescription>
          You are currently assigned to <span className="font-semibold">{projects?.length}</span>{" "}
          {projects?.length === 1 ? "project" : "projects"}
        </CardDescription>
      </CardHeader>

      <CardContent>
        {projects?.map((project) => (
          <ProjectEmployeeCard project={project} key={project.id} />
        ))}
      </CardContent>
    </Card>
  );
};

export default ProjectsContainer;

type Project = RouterOutputs["project"]["getAllByProfileId"][number];
const ProjectEmployeeCard: React.FC<{project: Project}> = ({project}) => {
  return (
    <Card key={project.id}>
      <CardHeader className="flex w-full flex-row items-center justify-start gap-x-3 border-b p-3">
        <Building className="ml-1 h-7 w-7 text-muted-foreground" />
        <CardTitle className="text-xl font-semibold tracking-wide first-letter:uppercase">
          <Link href={`/employee/dashboard/projects/${project.id}`}>{project.name}</Link>
        </CardTitle>
        <Badge
          className="rounded-sm"
          variant={project.status === "ACTIVE" ? "success" : project.status === "INACTIVE" ? "warning" : "draft"}
        >
          {project.status}
        </Badge>
      </CardHeader>

      <CardContent className="flex flex-col gap-y-2 pt-6">
        <CardDescription className="flex items-center gap-x-2">
          <MapPin />
          {project.address.street}, {project.address.city}
        </CardDescription>
        <CardDescription className="text-sm text-gray-500">
          {/* {projectManagers.map((manager) => manager.profile.firstName).join(", ")} */}
        </CardDescription>

        <CardFooter className="flex flex-row justify-start p-0">
          <Button variant="secondary" className="ml-auto flex items-center">
            View
          </Button>
        </CardFooter>
      </CardContent>
    </Card>
  );
};
