"use client";
import {
  Table,
  TableBody,
  TableCell,
  TableHeader,
  TableRow,
} from "@/app/[lang]/components/ui/table";
import { Locale } from "@/i18n.config";
import { useTranslation } from "@/lib/i18n/client";

export const TableWithHeader = (props: {
  lang: Locale;
  spec: {
    title: string;
    showMore?: boolean;
    link?: string;
    list: { [key: string]: string };
  };
}) => {
  const { t } = useTranslation(props.lang);
  const { spec } = props;

  return (
    <div key={spec.title}>
      <Table>
        <div className="mb-3">
          <TableHeader className="text-h6">
            {t(`bottomSection.${spec.title}`)}
          </TableHeader>
        </div>
        <TableBody className="mt-[15px]">
          {Object.keys(spec.list).map((key, i) => (
            <TableRow
              key={key}
              className="text-body1 text-primaryText h-auto border-0"
            >
              <TableCell className="text-left !text-body1 p-0 w-[205px] !pb-2">
                {t(`bottomSection.${key}`)}
              </TableCell>
              <TableCell className="text-body1 p-0 w-[111px] !pb-2">
                {t(`bottomSection.${spec.list[key]}`)}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
        <p className="text-sm text-blue1 mt-6">
          {spec.showMore ? t("bottomSection.showMore") : null}
        </p>
      </Table>
    </div>
  );
};
