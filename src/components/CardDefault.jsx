import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Button,
} from "@material-tailwind/react";

export function CardDefault({ singerName, imageUrl, description, onClick }) {
  return (
    <Card className="mt-6 w-96 cursor-pointer" onClick={onClick}>
      <CardHeader color="blue-gray" className="relative h-56">
        <img src={imageUrl} alt={singerName} />
      </CardHeader>
      <CardBody>
        <Typography variant="h5" color="blue-gray" className="mb-2">
          {singerName}
        </Typography>
        <Typography>{description}</Typography>
      </CardBody>
    </Card>
  );
}
