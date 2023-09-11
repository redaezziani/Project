import '../App.css';
import {
    Card,
    CardHeader,
    CardBody,
    CardFooter,
    Typography,
    Button,
} from "@material-tailwind/react";



export function CardDefault({...card}) {
  const {imageUrl, title, text} = card
    return (
        <div>
          <Card  className="mt-6 w-96 rtl-card relative p-1">
                    <CardHeader color="blue-gray" className="relative ">
                        <img
                            src={imageUrl}
                            alt="صورة البطاقة"
                            className='w-full h-full object-cover'
                        />
                    </CardHeader>
                    <CardBody>
                        <Typography variant="h5" color="blue-gray" className="mb-2 font-Cairo">
                            {title}
                        </Typography>
                        <Typography className='font-Cairo'>
                            {text}
                        </Typography>
                    </CardBody>
                    <CardFooter className="pt-0">
                        <Button className='font-Cairo'>اقرأ المزيد</Button>
                    </CardFooter>
                </Card>
        </div>
    );
}
