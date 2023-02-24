# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

user = User.create(
  username: 'samc',
  password: '123456',
  password_confirmation: '123456',
  bio: 'Hi, my name is Sam.',
  avatar_url: 'https://www.google.com/search?q=random+image&oq=random&aqs=chrome.1.69i57j69i59j0i131i433i512j0i433i512l2j0i131i433i512l2j69i61.2225j0j7&sourceid=chrome&ie=UTF-8#imgrc=jsbCYSW7o-fL-M',
)
