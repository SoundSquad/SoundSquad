import { Card, CardBody, Typography } from "@material-tailwind/react";

export function EventCard({ title, date }) {
  return (
    <Card className="mt-6 w-60 h-64 ">
      <CardBody>
        <Typography variant="h5" color="blue-gray" className="mb-2">
          {title}
        </Typography>
        <Typography>Date: {new Date(date).toLocaleDateString()}</Typography>
      </CardBody>
    </Card>
  );
}
