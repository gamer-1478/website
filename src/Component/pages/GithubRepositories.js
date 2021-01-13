import React from 'react'
import './gitrepo.css'
import { Button } from './gitcard'

const openInNewTab = (url) => {
    const newWindow = window.open(url, '_blank', 'noopener,noreferrer')
    if (newWindow) newWindow.opener = null
}

function GithubRepositories() {
    return (
        <div>
            <h5 className='github-repos'>Github Repositories</h5>
            <div className='cards'>
                <h1>My Repos</h1>
                <div className='cards__container'>
                    <div className='cards__wrapper'>
                        <ul className="cards__items">
                            <Button
                                buttonStyle='crd--square' onClick={() => { openInNewTab("https://github.com/gamer-12748/website") }}>Website- just my website</Button>
                            <Button
                                buttonStyle='crd--square' onClick={() => { openInNewTab("https://github.com/OpenStudyIndia/Website-front-end") }}>OpenIndiaStudy Frontend- this is a opensource based study material gathering blackboard and student management and inventory management site</Button>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );

}
export default GithubRepositories;