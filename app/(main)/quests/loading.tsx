import { Loader } from "lucide-react";

const Loading = () => {
  return (
    <div className="flex h-full w-full items-center justify-center">
      <Loader className="h-8 w-81 animate-spin text-muted-foreground" />
    </div>
  );
};

export default Loading;
