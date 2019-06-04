select * from posts 
where author_id = (select id from users where id != 4);
