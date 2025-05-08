import { searchService } from "./search.service.js"

export const SearchController = {
    search: async (req, res) => {
        const result = await searchService.search(req.params.fromPlaceId, req.params.toPlaceId, req.params.departureTime);

        return res.status(200).json(result);
    },
    save: async (req, res) => {
        console.log(req.body)
        const result = await searchService.saveSearch(req.body);

        return res.status(200).json(result);
    }
}