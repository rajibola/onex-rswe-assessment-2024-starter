"use client";
import {
  Table,
  TableBody,
  TableCell,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

export const TableWithHeader = (props: {
  spec: {
    title: string;
    showMore?: boolean;
    link?: string;
    list: { [key: string]: string };
  };
}) => {
  const { spec } = props;
  return (
    <div key={spec.title}>
      <Table>
        <div className="mb-3">
          <TableHeader className="text-h6">{spec.title}</TableHeader>
        </div>
        <TableBody className="mt-[15px]">
          {Object.keys(spec.list).map((key, i) => (
            <TableRow
              key={key}
              className="text-body1 text-primaryText h-auto border-0"
            >
              <TableCell className="text-left !text-body1 p-0 w-[205px] !pb-2">
                {key}
              </TableCell>
              <TableCell className="text-body1 p-0 w-[111px] !pb-2">
                {spec.list[key]}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};
