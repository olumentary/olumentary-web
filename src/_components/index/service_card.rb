class Index::ServiceCard < Bridgetown::Component
  def initialize(service_name:, description:)
    @service_name, @description = service_name, description
  end
end
