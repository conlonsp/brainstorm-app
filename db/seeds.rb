# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
puts '...seeding users 🧙🏽‍♂️'

user1 = User.create(
  username: 'samc',
  password: '123456',
  password_confirmation: '123456',
  bio: 'Hi, my name is Sam.',
  avatar_url: 'https://www.google.com/search?q=random+image&oq=random&aqs=chrome.1.69i57j69i59j0i131i433i512j0i433i512l2j0i131i433i512l2j69i61.2225j0j7&sourceid=chrome&ie=UTF-8#imgrc=jsbCYSW7o-fL-M',
)

user2 = User.create(
  username: 'noot',
  password: 'bark',
  password_confirmation: 'bark',
  bio: 'I like playing fetch!',
  avatar_url: 'https://www.google.com/search?q=random+image&oq=random&aqs=chrome.1.69i57j69i59j0i131i433i512j0i433i512l2j0i131i433i512l2j69i61.2225j0j7&sourceid=chrome&ie=UTF-8#imgrc=jsbCYSW7o-fL-M',
)

user3 = User.create(
  username: 'lacroix',
  password: 'sizzle',
  password_confirmation: 'sizzle',
  bio: 'Drink me.',
  avatar_url: 'https://www.google.com/search?q=random+image&oq=random&aqs=chrome.1.69i57j69i59j0i131i433i512j0i433i512l2j0i131i433i512l2j69i61.2225j0j7&sourceid=chrome&ie=UTF-8#imgrc=jsbCYSW7o-fL-M',
)

user4 = User.create(
  username: 'coolkid96',
  password: 'titetite',
  password_confirmation: 'tite',
  bio: 'Whatever',
  avatar_url: 'https://www.google.com/search?q=random+image&oq=random&aqs=chrome.1.69i57j69i59j0i131i433i512j0i433i512l2j0i131i433i512l2j69i61.2225j0j7&sourceid=chrome&ie=UTF-8#imgrc=jsbCYSW7o-fL-M',
)

puts '...seeding ideas 💡'

idea1 = Idea.create(
  title: 'Automatic Ball Thrower',
  content: 'It throws balls automatically so Noot leaves me alone.',
  likes: 0,
  user_id: 1,
)

idea2 = Idea.create(
  title: 'Super Fetch Machine',
  content: "Machine that doesn't stop playing fetch with me like Sam does.",
  user_id: 2,
)

idea3 = Idea.create(
  title: 'Tacos',
  content: 'Nothing ground-breaking. I was just thinking about tacos',
  user_id: 1,
)

idea4 = Idea.create(
  title: 'Super Ultra Mega Ball',
  content: "It's a really big ball that you can play with, woof.",
  user_id: 2,
)

idea5 = Idea.create(
  title: 'Automatic trash taker outer',
  content: "A machine that takes the trash outside and to the curb for you.",
  user_id: 3,
)

idea6 = Idea.create(
  title: 'Dry Water',
  content: "Water that you can bathe with, but it's dry.  Now you don't have to dry off after showers.",
  user_id: 4,
)

puts '...seeding comments 💬'

10.times do
  Comment.create(
    content: Faker::Lorem.sentence(word_count: 10),
    user_id: User.all.sample.id,
    idea_id: Idea.all.sample.id
  )
end



