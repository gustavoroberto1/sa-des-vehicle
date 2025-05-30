import { JSX } from "@emotion/react/jsx-runtime";
import { LuCircleCheckBig, LuCircleX, LuClock, LuFactory } from "react-icons/lu";

export enum Status {
  PENDING = "PENDING",
  APPROVED = "APPROVED",
  REJECTED = "REJECTED",
  UNDER_MAINTENANCE = "UNDER_MAINTENANCE",
  AWAITING_REVIEW = "AWAITING_REVIEW",
}

export const StatusLabel: Record<Status, string> = {
  [Status.PENDING]: "Pendente",
  [Status.APPROVED]: "Aprovado",
  [Status.REJECTED]: "Reprovado",
  [Status.UNDER_MAINTENANCE]: "Em Manutenção",
  [Status.AWAITING_REVIEW]: "Aguardando Revisão",
};

export const StatusIcon: Record<Status, JSX.Element> = {
  [Status.PENDING]: <LuClock />,
  [Status.APPROVED]: <LuCircleCheckBig />,
  [Status.REJECTED]: <LuCircleX />,
  [Status.UNDER_MAINTENANCE]: <LuFactory />,
  [Status.AWAITING_REVIEW]: <LuClock />,
}

