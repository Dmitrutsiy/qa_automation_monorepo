select u.email, count(r.id)
as recipes_count
from users u
inner join recipes r on r.owner_id = u.id
group by u.id, u.email
order by recipes_count desc; 