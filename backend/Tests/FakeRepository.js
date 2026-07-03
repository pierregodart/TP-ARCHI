class FakeRepository {

    getAll() {

        return [
            {
                id: 1,
                title: "Film A",
                genre: "Action",
                duration: 120,
                rating: 9,
                year: 2023,
                liked: true
            },
            {
                id: 2,
                title: "Film B",
                genre: "Action",
                duration: 180,
                rating: 10,
                year: 2023,
                liked: true
            }
        ];

    }

}

module.exports = FakeRepository;