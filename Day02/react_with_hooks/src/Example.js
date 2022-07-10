import React from 'react';
import { Media } from 'reactstrap';
import team from '../src/assets/team.jpg';

const Example = () => {
  return (
    <div>
      <Media>
        <Media left top href="https://www.amazon.in/">
          <Media object src="https://png.pngtree.com/png-vector/20200410/ourlarge/pngtree-online-shopping-concept-for-landing-page-or-e-commerce-site-png-image_2181567.jpg" alt="Generic placeholder image" />
        </Media>
        <Media body>
          <Media heading>
            Browse the products at ease
          </Media>
          Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin commodo. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.
        </Media>
      </Media>
      <Media className="mt-1">
        <Media left middle href="https://www.amazon.in/">
          <Media object src="https://png.pngtree.com/png-vector/20200422/ourmid/pngtree-online-shopping-concept-with-man-and-woman-characters-png-image_2187791.jpg" alt="Generic placeholder image" />
        </Media>
        <Media body>
          <Media heading>
            Select from wide range of collections
          </Media>
        
          Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin commodo. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.
          
        </Media> 
        </Media>
      
      <Media className="mt-1">
        <Media left bottom href="https://www.amazon.in/">
          <Media object src="https://png.pngtree.com/png-clipart/20191113/ourmid/pngtree-mobile-payment-digital-marketing-online-payment-systems-e-commerce-shopping-in-png-image_1983783.jpg" alt="Generic placeholder image" />
        </Media>
        <Media body>
          <Media heading>
            Pay via UPIs, netbanking or debit card or credit card
          </Media>
          Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin commodo. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.
        </Media>
      </Media>
    </div>
  );
};

export default Example;
