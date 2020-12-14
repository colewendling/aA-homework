class LRUCache
  def initialize(size)
    @size = size
    @cache = []
  end

  def count
    @cache.count
  end

  def add(el)
    if @cache.include?(el)          
      @cache.delete(el)
      @cache << el
    elsif count >= @size                # if cache has reached cache_size LRU
      @cache.shift                      # removes first LRU el and adds new el to cache
      @cache << el
    else
      @cache << el
    end
  end

  def show
    p @cache
    nil
  end
end
