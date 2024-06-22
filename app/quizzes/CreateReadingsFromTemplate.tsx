import { useFetcher } from "@remix-run/react";
import React from "react";
import Plus from "~/components/icons/Plus";
import InputControll from "~/components/input/InputControll";
import TextAreaControll from "~/components/input/TextAreaControll";
import { Button } from "~/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
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

type Props = {
  templateId: string;
};

const CreateReadingsFromTemplate = (props: Props) => {
  const { templateId } = props;
  const fetcher = useFetcher();
  const isSubmitting = fetcher.state === "submitting";
  const formId = `create-quiz-${templateId}`;

  return (
    <>
      <Dialog>
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger asChild>
              <DialogTrigger asChild>
                <button>
                  <Plus />
                </button>
              </DialogTrigger>
            </TooltipTrigger>
            <TooltipContent>
              <p>New quiz</p>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>Create new quiz</DialogTitle>
            <DialogDescription>
              Create a new quiz from selected template.
            </DialogDescription>
          </DialogHeader>
          <fetcher.Form method="post" id={formId}>
            <input type="hidden" name="action" value="create" />
            <input type="hidden" name="templateId" value={templateId} />
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

export default CreateReadingsFromTemplate;
