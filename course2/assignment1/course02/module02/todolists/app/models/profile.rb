class Profile < ActiveRecord::Base
  belongs_to :user

  validates :gender, inclusion: {in: %w(male female), message: "%{value} is not a valid gender"}

  validate :name_not_null
  validate :male_not_sue

  def name_not_null
      if (!first_name && !last_name) then
          errors.add(:first_name, 'First or last name should not be empty')
      end
  end

  def male_not_sue
      if (first_name == 'Sue' && gender == 'male')
          errors.add(:first_name, 'Male cannot have first_name Sue')
      end
  end

  def self.get_all_profiles(min, max)
      Profile.where("birth_year BETWEEN :min_age AND :max_age", min_age: min, max_age: max).order(birth_year: :asc)
  end
  
end
