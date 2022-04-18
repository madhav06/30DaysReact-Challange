import React from 'react';
import FeatureBox from './FeatureBox';
import featureimage from '../images/feature_1.png';
import featureimage1 from '../images/feature_5.png';
import featureimage2 from '../images/feature_3.png';
import featureimage3 from '../images/feature.jpg';

function Feature(){
  return (
    <div className='a-container'>
        <FeatureBox image={featureimage} title='Consulting Services'/>
        <FeatureBox image={featureimage2} title='Dedicated Teams'/>
        <FeatureBox image={featureimage1} title='Development Services'/>
        <FeatureBox image={featureimage3} title='Custom Services'/>
    </div>
  );
}

export default Feature;