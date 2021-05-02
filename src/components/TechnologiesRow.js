import React from 'react';

const TechnologiesRow = () => {
    return (
        <section id="technologies">
                <h1 className="section-title">Core Technologies</h1>
            <div>
                <article className="technology">
                    <h1>Freelance Work</h1>
                    <h2>second header</h2>
                    <h3>third header</h3>
                    <ul className="technology__features">
                        <li>bullet 1</li>
                        <li>bullet 2</li>
                        <li>bullet 3</li>
                        <li>bullet 4</li>
                    </ul>
                    <div>
                        <button className="button">learn more</button>
                    </div>
                </article>
                <article className="technology technology--highlighted">
                    <h1 className="technology__annotation">Something Extra</h1>
                    <h1>Profeshional Experience</h1>
                    <h2>second header</h2>
                    <h3>third header</h3>
                    <ul className="technology__features">
                        <li>bullet 1</li>
                        <li>bullet 2</li>
                        <li>bullet 3</li>
                        <li>bullet 4</li>
                    </ul>
                    <div>
                        <button className="button">learn more</button>
                    </div>
                </article>
                <article className="technology">
                    <h1>Mentoring Experience</h1>
                    <h2>second header</h2>
                    <h3>third header</h3>
                    <ul className="technology__features">
                        <li>bullet 1</li>
                        <li>bullet 2</li>
                        <li>bullet 3</li>
                        <li>bullet 4</li>
                    </ul>
                    <div>
                        <button className="button">learn more</button>
                    </div>
                </article>
            </div>
        </section>
    );
}

export default TechnologiesRow;
