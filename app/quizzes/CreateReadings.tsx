import { useFetcher } from "@remix-run/react";
import InputControll from "~/components/input/InputControll";
import SelectControll from "~/components/input/SelectControll";
import Plus from "~/components/icons/Plus";
import { Button } from "~/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "~/components/ui/dialog";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "~/components/ui/tooltip";
import { SelectItem } from "~/components/ui/select";
import TextAreaControll from "~/components/input/TextAreaControll";

type Props = {
  templates: {
    id: string;
    title: string;
  }[];
};

const CreateReadings = (props: Props) => {
  const { templates } = props;
  const fetcher = useFetcher();

  const isSubmitting = fetcher.state === "submitting";
  const formId = `create-quiz`;

  return (
    <>
      <Dialog>
        <div>
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <DialogTrigger asChild>
                  <Button className="my-4">
                    <Plus />
                  </Button>
                </DialogTrigger>
              </TooltipTrigger>
              <TooltipContent>
                <p>Create Quiz</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        </div>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>Create Quiz</DialogTitle>
          </DialogHeader>
          <fetcher.Form
            method="post"
            id={formId}
          >
            <input type="hidden" name="action" value="create" />
            <SelectControll
              name="templateId"
              id="templateId"
              required
              label="Course *"
            >
              {templates.map((template) => (
                <SelectItem key={template.id} value={String(template.id)}>
                  {template.title}
                </SelectItem>
              ))}
            </SelectControll>
            <InputControll
              type="text"
              name="title"
              id="title"
              required
              label="Title *"
              maxLength={255}
            />
            <TextAreaControll
              rows={4}
              name="description"
              id="description"
              label="Description"
              maxLength={255}
            />
          </fetcher.Form>
          <DialogFooter>
            <div className="mr-auto">
              <DialogClose asChild>
                <Button variant="destructive" disabled={isSubmitting}>
                  Close
                </Button>
              </DialogClose>
            </div>
            <Button
              form={formId}
              type="reset"
              variant="secondary"
              disabled={isSubmitting}
            >
              Clear
            </Button>
            <Button form={formId} type="submit" disabled={isSubmitting}>
              Submit
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default CreateReadings;
