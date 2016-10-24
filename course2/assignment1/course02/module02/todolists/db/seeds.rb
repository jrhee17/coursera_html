# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)

User.destroy_all
Profile.destroy_all
TodoList.destroy_all
TodoItem.destroy_all

user1 = User.create!({username: "Fiorina", password_digest: "password"})

profile1 = Profile.create!({gender: 'female', birth_year:1954, first_name:'Carly' ,last_name:'Fiorina' , user:user1})
todo_list1 = TodoList.create!({user: user1, list_name: profile1.first_name + ' list', list_due_date:(Date.today + 1.year)})
(1..5).to_a.each do |ind|
    TodoItem.create!({due_date:(Date.today + 1.year) ,title:profile1.first_name.to_s + ind.to_s  ,description: profile1.first_name.to_s + ind.to_s,completed: false, todo_list:todo_list1})
end

user2 = User.create!({username: "Trump", password_digest: "password"})
profile2 = Profile.create!({gender: 'male', birth_year:1946, first_name:'Donald' ,last_name:'Trump' , user:user2})
todo_list2 = TodoList.create!({user: user2, list_name: profile2.first_name + ' list', list_due_date:(Date.today + 1.year)})
(1..5).to_a.each do |ind|
    TodoItem.create!({due_date:(Date.today + 1.year) ,title:profile2.first_name.to_s + ind.to_s  ,description: profile2.first_name.to_s + ind.to_s,completed: false, todo_list:todo_list2})
end

user3 = User.create!({username: "Carson", password_digest: "password"})

profile3 = Profile.create!({gender: 'male', birth_year:1951, first_name:'Ben' ,last_name:'Carson' , user:user3})
todo_list3 = TodoList.create!({user: user3, list_name: profile3.first_name + ' list', list_due_date:(Date.today + 1.year)})
(1..5).to_a.each do |ind|
    TodoItem.create!({due_date:(Date.today + 1.year) ,title:profile3.first_name.to_s + ind.to_s  ,description: profile3.first_name.to_s + ind.to_s,completed: false, todo_list:todo_list3})
end

user4 = User.create!({username: "Clinton", password_digest: "password"})

profile4 = Profile.create!({gender: 'female', birth_year:1947, first_name:'Hillary' ,last_name:'Clinton' , user:user4})
todo_list4 = TodoList.create!({user: user4, list_name: profile4.first_name + ' list', list_due_date:(Date.today + 1.year)})
(1..5).to_a.each do |ind|
    TodoItem.create!({due_date:(Date.today + 1.year) ,title:profile4.first_name.to_s + ind.to_s  ,description: profile4.first_name.to_s + ind.to_s,completed: false, todo_list:todo_list4})
end

