/* eslint-disable jsx-a11y/no-autofocus */
import {
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogTitle,
  DialogTrigger,
  Dialog,
  DialogHeader,
} from "~/components/ui/dialog";
import Copy from "~/components/icons/Copy";
import { Input } from "~/components/ui/input";
import { Button } from "~/components/ui/button";
import {
  Tooltip,
  TooltipProvider,
  TooltipTrigger,
  TooltipContent,
} from "~/components/ui/tooltip";
import QRCode from "react-qr-code";
import { Link } from "@remix-run/react";

type Props = {
  code: string;
};

const link = (code: string) => {
  return `/join?code=${code}`;
};

const linkExternal = (code: string) => {
  const currentUrl = window.location.origin; // Get the current URL
  return `${currentUrl}/join?code=${code}`;
};

const DialogCode = (props: Props) => {
  const { code } = props;

  const copy = () => {
    if (!code) return;
    navigator.clipboard.writeText(linkExternal(code));
  };

  if (!code) return null;
  if (code.length !== 6) return null;

  return (
    <>
      <Dialog>
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger asChild>
              <DialogTrigger asChild>
                <button>
                  <Copy />
                </button>
              </DialogTrigger>
            </TooltipTrigger>
            <TooltipContent>
              <p>Copy link</p>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>Exam Code</DialogTitle>
            <DialogDescription>
              Share this code with your students to allow them to access the
              exam.
            </DialogDescription>
          </DialogHeader>
          <div className="mx-auto">
            <Link to={link(code)}>
              <QRCode value={link(code)} />
            </Link>
          </div>
          <div className="grid grid-cols-6 gap-4">
            <Input maxLength={1} type="number" value={code[0]} readOnly />
            <Input maxLength={1} type="number" value={code[1]} readOnly />
            <Input maxLength={1} type="number" value={code[2]} readOnly />
            <Input maxLength={1} type="number" value={code[3]} readOnly />
            <Input maxLength={1} type="number" value={code[4]} readOnly />
            <Input maxLength={1} type="number" value={code[5]} readOnly />
          </div>
          <DialogFooter>
            <DialogClose asChild>
              <Button variant="destructive">Close</Button>
            </DialogClose>
            <Button onClick={copy} className="mb-2 md:mb-0" autoFocus>
              Copy link
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default DialogCode;
