// To be made
import React, {useEffect, useState} from 'react';
import './styles.css';
import Faq from 'react-faq-component';

const data = {
    title: 'FAQ(How it works)',
    rows: [
        {
            title: 'How you promise secrecy to clients?',
            content: `Today ideas are not only precious and invaluable but commercial as well. Whether software, website, mobile app, or even data collected for consulting services, we ensure they are secured and confidential and take all required measures.`
        },
        {
            title: 'How would you describe your team to the client?,            ',
            content: `As honestly and transparently we could, CoodeIT is fortunate to have a good team of bright, knowledgeable, and talented professionals with considerable experience. They have high expertise in their are of working and are always ready to learn more. Teamwork is CoodeIT's main strength.`
        },
        {
            title: 'Are your developers updated with the latest technology?',
            content: `Staying updated with modern technology is necessary; our developer team is updated with the latest developments and innovations in the technology. For the same, we even conduct regular internal and external training programs.`
        }
    ]
};

const styles = {
    bgColor: 'white',
  titleTextColor: "blue",
   rowContentColor: 'grey',
    arrowColor: '#E5735C'
};

const config = {
    animate: true,
    arrowIcon: "V",
    tabFocus: true
  };

export default function Faqbar() {
    return(
        <div>
            <Faq data={data} styles={styles} config={config}/>
            
        </div>
    );
}