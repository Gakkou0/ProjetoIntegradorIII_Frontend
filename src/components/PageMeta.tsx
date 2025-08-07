import { Helmet } from 'react-helmet';
import icon from '../assets/logo-crateus-shop.png'

interface PageMetaProps {
  title: string;
  icon?: string;
}

export default function PageMeta({ title }: PageMetaProps) {
  return (
    <Helmet>
      <title>{title} | Crateús Shop</title>
      {icon && <link rel="icon" href={icon} />}
    </Helmet>
  );
}