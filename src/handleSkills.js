export function setSkills(skills, skillsElement){
    Object.keys(skills).forEach(t => {
        const topic = document.createElement('div');
        topic.classList.add('topic')
        skillsElement.appendChild(topic);

        const topicTitle = document.createElement('h3');
        topicTitle.innerText = t.charAt(0).toUpperCase() + t.slice(1);
        topic.appendChild(topicTitle);

        const list = document.createElement('ul');
        list.classList.add('card-list');

        topic.appendChild(list);
        skills[t].forEach(s => {
            const item = document.createElement('li');
            item.innerText = s;
            list.appendChild(item)
        });
    })
}