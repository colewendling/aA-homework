class Stack
    attr_reader :internal_array

    def initialize
        @internal_arr = []
    end

    def push(el)
        @internal_arr.push(el)
        el
    end

    def pop
        @internal_arr.pop
    end

    def peek
        @internal_arr.last
    end
end

class Queue

    attr_reader :underlying_array
    
    def initialize
        @internal_arr = []
    end

    def enqueue(el)
        @internal_arr.push(el)
        el
    end

    def dequeue
        @internal_array.shift
    end

    def peek
        @internal_arr.first
    end

end

class Map

    attr_accessor :my_map

    def initialize
        @my_map = []
    end

    def set(key, value)
        @my_map += [[key], [value]]
    end

    def get(key, value)
        @my_map.each {|subarray| return subarray[1] if subarray[0] == key }
    end

    def delete(key)
        value = get(key)
        @my_map.reject! {|subarray| subarray[0] == key }
        value
    end

    def show
        deep_dup(@my_map)
    end

    def deep_dup(arr)
        arr.map {|el| el.is_a?(Array) ? deep_dep(el) : el}
    end

end


