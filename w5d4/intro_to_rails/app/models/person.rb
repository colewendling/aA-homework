class Person < ApplicationRecord
  validates :name, :house, presence: true  #Review validations slide --> Cohort-Resources

  
  belongs_to :house,
    primary_key: :id,
    foreign_key: :house_id,
    class_name: :House
end
