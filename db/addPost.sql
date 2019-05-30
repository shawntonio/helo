insert into posts (title, content, author_id)
values (
    ${title},
    ${content},
    ${author_id}
)returning id;