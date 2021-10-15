import React from 'react';
import styled from 'styled-components';
import {InnerLayout} from '../../styles/Layouts';
import Title from '../Title';
import SmallTitle from '../SmallTitle';
import BusinessCenterIcon from '@material-ui/icons/BusinessCenter';
import SchoolIcon from '@material-ui/icons/School';
import ResumeItem from './ResumeItem';

function Resume() {
    const briefcase = <BusinessCenterIcon />
    const school = <SchoolIcon />
    return (
        <ResumeStyled>
            <Title title={'Resume'} span={'resume'} />
            <InnerLayout>
                <div className="small-title">
                    <SmallTitle icon={briefcase} title={'Working Experience'} />
                </div>
                <div className="resume-content">
                    <ResumeItem 
                        year={'2015 - 2020'} 
                        title={'Software Engineer '}
                        subTitle={'Serq Pvt. Ltd.'}
                        text={'Requirement analysis, Development activities of the Inhouse Portal.Testing and validating code and solutions (Unit Testing, Acceptance Testing, Regression Testing, and Load Testing).'}
                               
                                
                            
                         
                    />
                    {/* <ResumeItem 
                        year={'2015 - Present'} 
                        title={'Full Stack Developer'}
                        subTitle={'Serq Pvt. Ltd'}
                        text={'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Culpa nihil impedit natus nostrum? Velit accusantium id quos, nihil vel quod.Quas, magni mollitia, aspernatur consequatur accusamus vero eum facere exercitationem velit suscipit ipsam placeat libero. '} 
                    />
                    <ResumeItem 
                        year={'2010 - 2017'} 
                        title={'Serq Pvt. Ltd'}
                        subTitle={'Google Inc'}
                        text={'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Culpa nihil impedit natus nostrum? Velit accusantium id quos, nihil vel quod.Quas, magni mollitia, aspernatur consequatur accusamus vero eum facere exercitationem velit suscipit ipsam placeat libero. '} 
                    /> */}
                </div>
                <div className="small-title u-small-title-margin">
                    <SmallTitle icon={school} title={'Educational Qualifications'} />
                </div>
                <div className="resume-content ">
                    <ResumeItem 
                        year={'2010'} 
                        title={'Bachelor of Computer Science and Information Technology '}
                        subTitle={'Edith Cowan University – Australia'}
                        // text={'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Culpa nihil impedit natus nostrum? Velit accusantium id quos, nihil vel quod.Quas, magni mollitia,'} 
                    />
                    <ResumeItem 
                        year={'2007'} 
                        title={'Diploma of Computing and Information Technology '}
                        subTitle={'Perth Institute of Business & Technology – Australia'}
                        // text={'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Culpa nihil impedit natus nostrum? Velit accusantium id quos, nihil vel quod.Quas, magni mollitia,'} 
                    />
                    <ResumeItem 
                        year={'2005'} 
                        title={'Certificate IV in University Foundation Studies (Information Technology)'}
                        subTitle={'Perth Institute of Business & Technology – Australia'}
                        // text={'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Culpa nihil impedit natus nostrum? Velit accusantium id quos, nihil vel quod.Quas, magni mollitia, aspernatur consequatur accusamus vero eum facere exercitationem velit suscipit ipsam placeat libero. '} 
                    />
                    <ResumeItem 
                        year={'2003'} 
                        title={'General Certificate of Education Ordinary Level'}
                        subTitle={'Maliyadeva College - Kurunegala, Sri Lanka '}
                        // text={'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Culpa nihil impedit natus nostrum? Velit accusantium id quos, nihil vel quod.Quas, magni mollitia, aspernatur consequatur accusamus vero eum facere exercitationem velit suscipit ipsam placeat libero.   '} 
                    />
                </div>
            </InnerLayout>
        </ResumeStyled>    
    )
}

const ResumeStyled = styled.section`
    .small-title{
        padding-bottom: 3rem;
    }
    .u-small-title-margin{
        margin-top: 4rem;
    }

    .resume-content{
        border-left: 2px solid var(--border-color);
    }
`;
export default Resume
