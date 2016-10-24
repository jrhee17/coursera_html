#Implement all parts of this assignment within (this) module2_assignment2.rb file

#Implement a class called LineAnalyzer.
class LineAnalyzer
    include Comparable
    attr_reader :highest_wf_count, :highest_wf_words, :content, :line_number
  #Implement the following read-only attributes in the LineAnalyzer class. 
  #* highest_wf_count - a number with maximum number of occurrences for a single word (calculated)
  #* highest_wf_words - an array of words with the maximum number of occurrences (calculated)
  #* content          - the string analyzed (provided)
  #* line_number      - the line number analyzed (provided)

  #Add the following methods in the LineAnalyzer class.
  #* initialize() - taking a line of text (content) and a line number
    def initialize(content, line_number)
        @content = content
        @line_number = line_number
        calculate_word_frequency()
    end
  #* calculate_word_frequency() - calculates result
    def calculate_word_frequency()
        # Initialize variables
        map = {}
        @highest_wf_words = []

        # Compute hash
        @content.split.each do |word|
            word.downcase!
            map[word] ||= 0
            map[word] += 1
        end

        # Assign to variables
        @highest_wf_count = map.values.max
        map.each do |key, value|
            if value == @highest_wf_count then
                @highest_wf_words << key
            end
        end
    end

    def <=>(another)
         another.highest_wf_count <=> @highest_wf_count
    end
end

#  Implement a class called Solution. 
class Solution
    attr_reader :analyzers, :highest_count_across_lines, :highest_count_words_across_lines

  # Implement the following read-only attributes in the Solution class.
  #* analyzers - an array of LineAnalyzer objects for each line in the file
  #* highest_count_across_lines - a number with the maximum value for highest_wf_words attribute in the analyzers array.
  #* highest_count_words_across_lines - a filtered array of LineAnalyzer objects with the highest_wf_words attribute 
  #  equal to the highest_count_across_lines determined previously.

  # Implement the following methods in the Solution class.
  #* analyze_file() - processes 'test.txt' intro an array of LineAnalyzers and stores them in analyzers.
  #* calculate_line_with_highest_frequency() - determines the highest_count_across_lines and 
  #  highest_count_words_across_lines attribute values
  #* print_highest_word_frequency_across_lines() - prints the values of LineAnalyzer objects in 
  #  highest_count_words_across_lines in the specified format
    def initialize
        @analyzers = []
    end
    def analyze_file()
        File.open('test.txt', 'r') do |f|
            f.each_line do |line|
                @analyzers << LineAnalyzer.new(line, f.lineno)
            end
        end
        @analyzers.sort!
    end
    def calculate_line_with_highest_frequency()
        @highest_count_words_across_lines = []
        lines = []
        @highest_count_across_lines = @analyzers.first.highest_wf_count
        @analyzers.each do |analyzer|
            if analyzer.highest_wf_count == @highest_count_across_lines then
                lines << analyzer.line_number
                @highest_count_words_across_lines << analyzer
            end
        end
        lines
    end
    def print_highest_word_frequency_across_lines()
        p @highest_count_words_across_lines
    end

  
  # Implement the analyze_file() method() to:
  #* Read the 'test.txt' file in lines 
  #* Create an array of LineAnalyzers for each line in the file

  # Implement the calculate_line_with_highest_frequency() method to:
  #* calculate the maximum value for highest_wf_count contained by the LineAnalyzer objects in analyzers array
  #  and stores this result in the highest_count_across_lines attribute.
  #* identifies the LineAnalyzer objects in the analyzers array that have highest_wf_count equal to highest_count_across_lines 
  #  attribute value determined previously and stores them in highest_count_words_across_lines.

  #Implement the print_highest_word_frequency_across_lines() method to
  #* print the values of objects in highest_count_words_across_lines in the specified format
end
